"use strict";

namespace core {
    export class Contact {
        private m_fullName: string;
        private m_contactNumber: string;
        private m_emailAddress: string;

        constructor(fullName:string = "", contactNumber:string = "", emailAddress:string = ""){
            this.m_fullName = fullName;
            this.m_contactNumber = contactNumber;
            this.m_emailAddress = emailAddress;
        }

        public set FullName(fullName){
            this.m_fullName = fullName;
        }

        public get FullName(){
            return this.m_fullName;
        }

        public set ContactNumber(contactNumber){
            this.m_contactNumber = contactNumber;
        }

        public get ContactNumber(){
            return this.m_contactNumber;
        }

        public set EmailAddress(emailAddress){
            this.m_emailAddress = emailAddress;
        }

        public get EmailAddress(){
            return this.m_emailAddress;
        }

        public toString(){
            return ` FullName: ${this.FullName}\n Contact Number: ${this.ContactNumber}\n Email Address: ${this.EmailAddress}`;
        }

        public serialize(){
            if(this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== ""){
                return `${this.FullName}, ${this.ContactNumber}, ${this.EmailAddress}`;
            }
            console.error("One or more of the attributes are empty or missing")
            return null;
        }

        public deserialize(data:string) :void{
            let propertyArray = data.split(",");
            this.FullName = propertyArray[0];
            this.ContactNumber = propertyArray[1];
            this.EmailAddress = propertyArray[2];
        }
    }
}