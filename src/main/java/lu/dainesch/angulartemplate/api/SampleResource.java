package lu.dainesch.angulartemplate.api;

import javax.json.Json;
import javax.json.JsonArray;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("sample")
public class SampleResource {
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public JsonArray getSampleData() {
        return Json.createArrayBuilder()
                .add(Json.createObjectBuilder().add("name", "Example1"))
                .add(Json.createObjectBuilder().add("name", "Example2"))
                .add(Json.createObjectBuilder().add("name", "Example3"))
                .add(Json.createObjectBuilder().add("name", "Example4"))
                .add(Json.createObjectBuilder().add("name", "Example99"))
                .build();
    }
    
}
