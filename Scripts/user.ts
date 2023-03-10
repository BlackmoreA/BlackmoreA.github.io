"use strict";

namespace core {
    export class User {
        private m_displayName: string;
        private m_emailAddress: string;
        private m_userName: string;
        private m_password: string;

        constructor(displayName:string = "", emailAddress:string = "", username:string = "", password:string = ""){
            this.m_displayName = displayName;
            this.m_emailAddress = emailAddress;
            this.m_userName = username;
            this.m_password = password;
        }

        public set DisplayName(displayName:string){
            this.m_displayName = displayName;
        }

        public get DisplayName() :string {
            return this.m_displayName;
        }

        public set EmailAddress(emailAddress:string){
            this.m_emailAddress = emailAddress;
        }

        public get EmailAddress() :string {
            return this.m_emailAddress;
        }

        public set UserName(userName:string) {
            this.m_userName = userName;
        }

        public get UserName() :string {
            return this.m_userName;
        }

        public set Password(password:string) {
            this.m_password = password;
        }

        public get Password() :string {
            return this.m_password;
        }

        public toString() :string {
            return ` Display Name: ${this.DisplayName}
                    \n Email Address: ${this.EmailAddress}
                    \n User Name: ${this.UserName}`;
        }

        public toJSON() : { DisplayName :string; EmailAddress :string; UserName :string; } {
            return {
                "DisplayName" : this.m_displayName,
                "EmailAddress" : this.m_emailAddress,
                "UserName" : this.m_userName
            }
        }

        fromJSON(data :User) {
            this.m_displayName = data.DisplayName;
            this.m_emailAddress = data.EmailAddress;
            this.m_userName = data.UserName;
            this.m_password = data.Password;
        }

        serialize() :string | null {
            if(this.DisplayName !== "" && this.EmailAddress !== "" && this.UserName !== "" && this.Password !== ""){
                return `${this.DisplayName}, ${this.EmailAddress}, ${this.UserName}, ${this.Password}`;
            }
            console.error("One or more of the attributes are empty or missing")
            return null;
        }

        deserialize(data :string) :void {
            let propertyArray = data.split(",");
            this.DisplayName = propertyArray[0];
            this.EmailAddress = propertyArray[1];
            this.UserName = propertyArray[2];
            this.Password = propertyArray[3];
        }
    }

}