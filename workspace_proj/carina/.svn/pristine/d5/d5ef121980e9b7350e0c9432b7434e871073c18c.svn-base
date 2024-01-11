package com.carina.cbs.cbsa.web;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
public class CbsaaController {

    @PostMapping("/calculateTotal")
    @ResponseBody
    public Map<String, Object> calculateTotal(@RequestParam(name = "elecCo2", required = false) Double elecCo2,
                                              @RequestParam(name = "gasCo2", required = false) Double gasCo2,
                                              @RequestParam(name = "waterCo2", required = false) Double waterCo2,
                                              @RequestParam(name = "carCo2", required = false) Double carCo2,
                                              @RequestParam(name = "elecTree", required = false) Double elecTree,
                                              @RequestParam(name = "gasTree", required = false) Double gasTree,
                                              @RequestParam(name = "waterTree", required = false) Double waterTree,
                                              @RequestParam(name = "carTree", required = false) Double carTree) {
        Map<String, Object> result = new HashMap<>();

        double totalCo2 = elecCo2 + gasCo2 + waterCo2 + carCo2;
        double totalTree = elecTree + gasTree + waterTree + carTree;

        result.put("totalCo2", totalCo2);
        result.put("totalTree", totalTree);

        // 기타 필요한 결과 추가

        return result;
    }

    @PostMapping("/saveData")
    @ResponseBody
    public Map<String, Object> saveData(@RequestBody Map<String, Object> requestData) {
        Map<String, Object> result = new HashMap<>();

        // 여기에 데이터 저장 로직 추가

        result.put("status", "success");
        result.put("message", "Data saved successfully.");

        return result;
    }
}
