package com.carina.cbs.cbsa.web;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/energyCalculator")
public class EnergyCalculatorController {

    @PostMapping("/calculateCar")
    @ResponseBody
    public Map<String, Object> calculateCar(
            @RequestParam(name = "usedElec", required = false) Integer usedElec,
            @RequestParam(name = "moneyElec", required = false) Integer moneyElec,
            @RequestParam(name = "elecHighrow", required = false) String elecHighrow,
            @RequestParam(name = "elecMonth", required = false) String elecMonth,
            @RequestParam(name = "price", required = false) Integer price,
            @RequestParam(name = "euType", required = false) String euType) {
        
        Map<String, Object> result = new HashMap<>();

        if (euType != null && euType.equals("3")) {
            // Assuming '3' represents other types like electric
            result.put("co2", 0);
            result.put("tree", 0);
        } else if (usedElec != null) {
            // Electric usage calculation
            double elecCo2 = calculateElectricCo2(usedElec);
            double elecTree = calculateTreeByElectricCo2(elecCo2);

            result.put("co2", elecCo2);
            result.put("tree", elecTree);
        } else if (moneyElec != null) {
            // Electric cost calculation
            double elecCo2 = calculateElectricCo2ByMoney(moneyElec);
            double elecTree = calculateTreeByElectricCo2(elecCo2);

            result.put("co2", elecCo2);
            result.put("tree", elecTree);
        }

        // Additional results or logic can be added here

        return result;
    }

    private double calculateElectricCo2(int usedElec) {
        // Electric usage to CO2 calculation logic
        // Example: usedElec * coefficient, replace with actual logic
        return 42.0;
    }

    private double calculateElectricCo2ByMoney(int moneyElec) {
        // Electric cost to CO2 calculation logic
        // Example: moneyElec * coefficient, replace with actual logic
        return 42.0;
    }

    private double calculateTreeByElectricCo2(double elecCo2) {
        // CO2 to tree calculation logic
        // Example: elecCo2 / coefficient, replace with actual logic
        return 3.14;
    }
}
