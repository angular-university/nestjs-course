import {CanActivate, ExecutionContext, ForbiddenException, Injectable} from '@nestjs/common';


@Injectable()
export class AuthorizationGuard implements CanActivate {

    constructor(private allowedRoles:string[]) {

    }

    canActivate(context: ExecutionContext): boolean  {

        const host = context.switchToHttp(),
            request = host.getRequest();

        const user = request["user"];

        const allowed = this.isAllowed(user.roles);

        console.log("user is allowed: ", allowed);

        if (!allowed) {
            console.log("User is authenticated but not authorized, denying access...");
            throw new ForbiddenException();
        }

        console.log("User is authorized, allowing access");

        return true;
    }

    isAllowed(userRoles:string[]) {

        console.log("Comparing roles: ", this.allowedRoles, userRoles);

        let allowed = false;

        userRoles.forEach(userRole => {
            console.log("Checking if role is allowed ", userRole);
            if (!allowed && this.allowedRoles.includes(userRole)) {
                allowed = true;
            }
        });

        return allowed;

    }


}
