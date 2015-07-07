/*
  FakeCookie
  
  Simulate reading and writing browser cookies.

  Copyright 2015 Sam Saint-Pettersen.
  Released under the MIT License.
*/

class Cookie {

    private static names = new Array<string>();
    private static values = new Array<string>();
    
    // Return number of stored cookies.
    public static get count() {
        return Cookie.names.length;
    }

    // Emulate jquery-cookie method to create or return a cookie.
    public static cookie(name: string, value?: any, options?: Object): string {
    	// Options is unused as is only a placeholder for drop-in compatibility 
    	// with jquery-cookie.
    	var result: string = null;
    	var index: number = Cookie.names.indexOf(name);
    	// RETURN A COOKIE:
        if(value == null) {
        	// Return cookie value if cookie exists.
  		if(index != -1) {
  			result = Cookie.values[index];
  		}
  		// Otherwise, will return null.
        }
        // CREATE A COOKIE:
        else {
        	// Overwrite existing cookie:
        	if(index != -1) {
        		Cookie.values[index] = value.toString();
        	}
        	// Create a new cookie:
        	else {
        		Cookie.names.push(name);
        		Cookie.values.push(value.toString());
        	}
        } 
        return result;
    }

    // Emulate jquery-cookie method to remove a cookie.
    public static removeCookie(name: string): void {
    	var index: number = Cookie.names.indexOf(name);
    	if(index != -1) {
    		Cookie.names.splice(index, 1);
    		Cookie.values.splice(index, 1);
    	}
    }
    
    // Clear all stored cookies.
    public static clearCookies(): void {
        Cookie.names = [];
        Cookie.values = [];
    }
    
    // Return all stored cookies and their values.
    public static getCookies(): string[] {
        var cookies = new Array<string>();
        for(var i: number = 0; i < Cookie.names.length; i++) {
            cookies.push(Cookie.names[i] + '=>' + Cookie.values[i]);
        }
        return cookies;
    }
}
export = Cookie;
