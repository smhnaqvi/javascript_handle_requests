type BaseAPIListType = {
    path: string
    authenticate?: boolean,
    route: string,
    rest: BaseAPIRestType
}

type BaseAPIRestType = {
    get: Promise<any>,
    post: Promise<any>,
    put: Promise<any>,
    delete: Promise<any>,
}

type BaseAPIProps = {
    baseUrl?: string,
    port?: number | null,
    version?: number | null
}

type BaseAPIRouteProps = {
    routeName: string,
    version?: number | undefined,
    authenticate?: boolean,
}
class BaseAPI {

    config: BaseAPIProps = {
        baseUrl: "127.0.0.1",
        port: 3005,
        version: 1
    };

    constructor({ baseUrl, port, version }: BaseAPIProps) {
        if (baseUrl) this.config.baseUrl = baseUrl;
        if (port || port === null) this.config.port = port;
        if (version) this.config.version = version;
    }

    private routesList: Array<BaseAPIListType> = [];

    public set({ routeName: route, authenticate = false, version }: BaseAPIRouteProps) {
        this.routesList.push({
            path: this.generateRoute(route, version),
            route: route,
            authenticate: authenticate,
            rest: this.generatePromisses(route)
        })
    }

    public routes() {
        return this.routesList;
    }

    private URL(version?: number | undefined): string | undefined {
        let URL: string | undefined = this.config.baseUrl;
        if (this.config.port) URL += `:${this.config.port}`;

        if (version) {
            URL += `/v${this.config.version}/`
        } else {
            if (this.config.version) URL += `/v${this.config.version}/`;
        }

        return URL;
    }

    private generateRoute(route: string, version: number | undefined) {
        return this.URL(version) + route
    }

    private generatePromisses(route: string): BaseAPIRestType {

        const promisses: BaseAPIRestType = {
            get: new Promise((resolve, reject) => {

            }),
            post: new Promise((resolve, reject) => {

            }),
            put: new Promise((resolve, reject) => {

            }),
            delete: new Promise((resolve, reject) => {

            })
        }

        return promisses
    }
}



const instance = new BaseAPI({ port: 5000, version: 5 });

instance.set({ routeName: "users", authenticate: true, version: 5 });
instance.set({ routeName: "articals", authenticate: true, version: 5 });
instance.set({ routeName: "posts", authenticate: true, version: 5 });

instance.set({ routeName: "users", authenticate: false, version: 1 });
instance.set({ routeName: "articals", authenticate: false, version: 1 });
instance.set({ routeName: "posts", authenticate: false, version: 1 });

console.log(instance.routes());