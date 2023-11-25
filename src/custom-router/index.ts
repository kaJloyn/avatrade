import Vue from 'vue'
import ErrorView from "@/views/ErrorView.vue"

type Route = {
  path: string
  redirect?: string
  component: typeof Vue
  children?: Route[]
  guards?: ((path: string, next: () => void, fail: () => void) => void)[]

}

export class CustomRouter {
  public routes: Route[]
  public currentComponent: typeof Vue | null

  constructor(routes: Route[]) {
    this.routes = routes
    this.currentComponent = null
  }

  public init(): void {
    window.addEventListener('popstate', () => {
      this.resolve(window.location.pathname)
      location.reload()
    })
    this.resolve(window.location.pathname)


  }

  private resolve(path: string): void {
    const matchedRoute = this.findRoute(this.routes, path)

    if (matchedRoute && matchedRoute.route) {
      const route = matchedRoute.route
      if (route.redirect) {
        this.push(route.redirect)
        return
      }

      if (route.guards && route.guards.length > 0) {
        this.runRouteGuards(route, () => {
          this.handleRoute(route, path)
        })
      } else {
        this.handleRoute(route, path)
      }
    } else {
      this.currentComponent = ErrorView
    }
  }

  private handleRoute(route: Route, path: string): void {
    if (route.children) {
      const childRoute = route.children.find(child => path.includes(child.path))
      if (childRoute && childRoute.component) {
        this.currentComponent = Vue.extend({
          render(h) {
            return h(route.component, [
              h('div', { slot: 'default' }, [h(childRoute.component)])
            ])
          }
        })
      }
    } else {
      this.currentComponent = route.component
    }
  }

  private findRoute(routes: Route[], path: string): { route: Route | null } {
    for (const route of routes) {
      if (route.path === path) {
        return { route }
      }
      if (route.children) {
        for (const child of route.children) {
          const fullPath = route.path + (child.path ? '/' + child.path : '')
          if (fullPath === path) {
            return { route }
          }
        }
      }
    }
    return { route: null }
  }

  private runRouteGuards(route: Route, onComplete: () => void): void {
    const guards = route.guards || []
    let currentIndex = 0

    const next = (): void => {
      if (currentIndex < guards.length) {
        const guard = guards[currentIndex]
        currentIndex++
        guard(route.path, next, fail)
      } else {
        onComplete()
      }
    }

    const fail = (): void => {
      const currentPath = window.location.pathname
      if (currentPath !== '/login') {
        history.pushState({}, '', '/login')
        this.resolve('/login')
      } else {
        next()
      }
    }

    next()
  }

  public push(path: string): void {
    history.pushState({}, '', path)
    this.resolve(path)
    location.reload()
  }
}
