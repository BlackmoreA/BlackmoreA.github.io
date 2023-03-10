"use strict";
var core;
(function (core) {
    class User {
        m_displayName;
        m_emailAddress;
        m_userName;
        m_password;
        constructor(displayName = "", emailAddress = "", username = "", password = "") {
            this.m_displayName = displayName;
            this.m_emailAddress = emailAddress;
            this.m_userName = username;
            this.m_password = password;
        }
        set DisplayName(displayName) {
            this.m_displayName = displayName;
        }
        get DisplayName() {
            return this.m_displayName;
        }
        set EmailAddress(emailAddress) {
            this.m_emailAddress = emailAddress;
        }
        get EmailAddress() {
            return this.m_emailAddress;
        }
        set UserName(userName) {
            this.m_userName = userName;
        }
        get UserName() {
            return this.m_userName;
        }
        set Password(password) {
            this.m_password = password;
        }
        get Password() {
            return this.m_password;
        }
        toString() {
            return ` Display Name: ${this.DisplayName}
                    \n Email Address: ${this.EmailAddress}
                    \n User Name: ${this.UserName}`;
        }
        toJSON() {
            return {
                "DisplayName": this.m_displayName,
                "EmailAddress": this.m_emailAddress,
                "UserName": this.m_userName
            };
        }
        fromJSON(data) {
            this.m_displayName = data.DisplayName;
            this.m_emailAddress = data.EmailAddress;
            this.m_userName = data.UserName;
            this.m_password = data.Password;
        }
        serialize() {
            if (this.DisplayName !== "" && this.EmailAddress !== "" && this.UserName !== "" && this.Password !== "") {
                return `${this.DisplayName}, ${this.EmailAddress}, ${this.UserName}, ${this.Password}`;
            }
            console.error("One or more of the attributes are empty or missing");
            return null;
        }
        deserialize(data) {
            let propertyArray = data.split(",");
            this.DisplayName = propertyArray[0];
            this.EmailAddress = propertyArray[1];
            this.UserName = propertyArray[2];
            this.Password = propertyArray[3];
        }
    }
    core.User = User;
})(core || (core = {}));
//# sourceMappingURL=user.js.map