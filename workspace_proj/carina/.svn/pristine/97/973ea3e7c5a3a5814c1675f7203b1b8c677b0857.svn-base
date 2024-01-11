package com.carina.cbs.cbsa.web;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.carina.cbs.cbsa.service.CbsaService;

@Controller
@RequestMapping("/tanso")
public class TansoController {
	@Autowired
    private CbsaService fileService; // Inject your file service here

    @PostMapping("/insert_data.green")
    @ResponseBody
    public Map<String, Object> insertData(
            @RequestParam("elecCo2") Double elecCo2,
            @RequestParam("gasCo2") Double gasCo2,
            @RequestParam("waterCo2") Double waterCo2,
            @RequestParam("carCo2") Double carCo2,
            @RequestParam("elecTree") Double elecTree,
            @RequestParam("gasTree") Double gasTree,
            @RequestParam("waterTree") Double waterTree,
            @RequestParam("carTree") Double carTree,
            @RequestParam("memberTotalCo2") Double TotalCo2,
            @RequestParam("memberTotalTree") Double TotalTree
    ) {
        // Your logic to save the data, update the database, etc.

        Map<String, Object> result = new HashMap<>();
        
        // Example: Adding some data to the result map
        result.put("status", "success");
        result.put("message", "Data inserted successfully");
        
        return result;
    }
    @PostMapping("/update_data.green")
    @ResponseBody
    public Map<String, Object> updateData(
            @RequestParam("elecCo2") Double elecCo2,
            @RequestParam("gasCo2") Double gasCo2,
            @RequestParam("waterCo2") Double waterCo2,
            @RequestParam("carCo2") Double carCo2,
            @RequestParam("elecTree") Double elecTree,
            @RequestParam("gasTree") Double gasTree,
            @RequestParam("waterTree") Double waterTree,
            @RequestParam("carTree") Double carTree,
            @RequestParam("memberTotalCo2") Double TotalCo2,
            @RequestParam("memberTotalTree") Double TotalTree,
            @RequestParam("resultIdx") Long resultIdx ) {

        // Your logic to save the data, update the database, etc.
        // Add your actual logic here

        Map<String, Object> result = new HashMap<>();
        result.put("status", "success");
        result.put("message", "Data inserted successfully");

        return result;
    }



    @RequestMapping("/initialPage")
    public String initialPage() {
        return "/cbs/simul"; // Assuming "index" is your initial HTML page
    }

    @PostMapping(value = "/save_sale.green", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Map<String, Object> saveSaleData(@RequestBody Map<String, Object> requestData) {
        Map<String, Object> result = new HashMap<>();

        try {
            // Extract parameters from the requestData map
            List<String> elecIdx = (List<String>) requestData.get("elecIdx");
            List<String> gasIdx = (List<String>) requestData.get("gasIdx");
            List<String> waterIdx = (List<String>) requestData.get("waterIdx");
            List<String> carIdx = (List<String>) requestData.get("carIdx");
            String memberIdx = (String) requestData.get("memberIdx");

            // Your logic to save sale data
            // ...

            result.put("status", "success");
            result.put("message", "Data saved successfully");
        } catch (Exception e) {
            e.printStackTrace();
            result.put("status", "error");
            result.put("message", "An error occurred");
        }

        return result;
    }




    @PostMapping("/sendMail.green")
    @ResponseBody
    public Map<String, String> sendMail(@RequestParam("memberIdx") String memberIdx,
                                        @RequestParam("mailName") String mailName,
                                        @RequestParam("mailAddress") String mailAddress,
                                        @RequestParam("userName") String userName) {
        Map<String, String> response = new HashMap<>();

        try {
            // Your logic to send mail

            // Return a success response
            response.put("msg", "ok");
        } catch (Exception e) {
            // Handle exceptions if any
            e.printStackTrace();
            response.put("msg", "error");
        }

        return response;
    }


    @PostMapping("/downfile.green")
    public ResponseEntity<byte[]> downloadFile(@RequestParam("memberIdx") String memberIdx) {
        try {
            // Fetch file content using the injected fileService
            byte[] fileContent = fileService.getFileContent(memberIdx);

            // Assuming you have a method to retrieve the actual filename based on memberIdx
            String actualFilename = fileService.getFilename(memberIdx);

            // Check if actualFilename is not null or empty
            if (actualFilename == null || actualFilename.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }

            // Set headers for the response
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
            headers.setContentDispositionFormData("attachment", actualFilename);

            return new ResponseEntity<>(fileContent, headers, HttpStatus.OK);
        } catch (Exception e) {
            // Handle exceptions appropriately
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    	
    
    
    
}
