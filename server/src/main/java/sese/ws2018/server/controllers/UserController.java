package sese.ws2018.server.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class UserController {

    @RequestMapping(value = "/api/users/me", method = RequestMethod.GET, produces = "text/plain")
    @ResponseBody
    public String currentUserName(Principal principal) {
        return principal.getName();
    }
}
