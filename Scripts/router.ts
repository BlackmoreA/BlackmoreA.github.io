"use strict";

namespace core {
    export class Router {
        // Public Properties
        private m_activeLink: string;
        private m_routingTable: string[];
        /**
         *
         * @returns {string}
         */
        get ActiveLink() :string{
            return this.m_activeLink;
        }

        /**
         *
         * @param link {string}
         */
        set ActiveLink(link:string) {
            this.m_activeLink = link;
        }

        // Constructor
        constructor() {
            this.m_activeLink = "";
            this.m_routingTable = [];
        }

        // Public Methods
        public Add(route:string) :void {
            this.m_routingTable.push(route);
        }

        public AddTable(routingTable:string[]) :void {
            this.m_routingTable = routingTable;
        }

        public Find(route:string) :number {
            return this.m_routingTable.indexOf(route);
        }

        public Remove(route:string) :boolean {
            if (this.Find(route) > -1) {
                this.m_routingTable.splice(this.Find(route), 1);
                return true;
            }
            return false
        }

        // Public Overrides
        toString() {
            return this.m_routingTable.toString();
        }
    }

}

let router :core.Router = new core.Router();

router.AddTable([
    "/",
    "/home",
    "/services",
    "/about",
    "/contact",
    "/contact-list",
    "/edit",
    "/login",
    "/products",
    "/register",
]);

let route :string = location.pathname;

router.ActiveLink = (router.Find(route) > -1)
                    ? (route === "/") ? "home" : route.substring(1)
                    : ("404");