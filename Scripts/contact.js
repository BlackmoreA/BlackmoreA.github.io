"use strict";
var core;
(function (core) {
    class Contact {
        m_fullName;
        m_contactNumber;
        m_emailAddress;
        constructor(fullName = "", contactNumber = "", emailAddress = "") {
            this.m_fullName = fullName;
            this.m_contactNumber = contactNumber;
            this.m_emailAddress = emailAddress;
        }
        set FullName(fullName) {
            this.m_fullName = fullName;
        }
        get FullName() {
            return this.m_fullName;
        }
        set ContactNumber(contactNumber) {
            this.m_contactNumber = contactNumber;
        }
        get ContactNumber() {
            return this.m_contactNumber;
        }
        set EmailAddress(emailAddress) {
            this.m_emailAddress = emailAddress;
        }
        get EmailAddress() {
            return this.m_emailAddress;
        }
        toString() {
            return ` FullName: ${this.FullName}\n Contact Number: ${this.ContactNumber}\n Email Address: ${this.EmailAddress}`;
        }
        serialize() {
            if (this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "") {
                return `${this.FullName}, ${this.ContactNumber}, ${this.EmailAddress}`;
            }
            console.error("One or more of the attributes are empty or missing");
            return null;
        }
        deserialize(data) {
            let propertyArray = data.split(",");
            this.FullName = propertyArray[0];
            this.ContactNumber = propertyArray[1];
            this.EmailAddress = propertyArray[2];
        }
    }
    core.Contact = Contact;
})(core || (core = {}));
//# sourceMappingURL=contact.js.map