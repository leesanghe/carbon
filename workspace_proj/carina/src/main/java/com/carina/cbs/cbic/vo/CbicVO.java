package com.carina.cbs.cbic.vo;

public class CbicVO {
    private String city;
    private double carbonEmissions;
    private int carbonAbsorption;
    private int electricity;
    private double greenhouseGas;
    private String year;
    private double total;
    // Constructors, getters, setters, and toString method

    public double getTotal() {
		return total;
	}

	public void setTotal(double total) {
		this.total = total;
	}

	// Default constructor
    public CbicVO() {
        // Default constructor, no initialization logic
    }

    // Getter and setter methods for each field
    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public double getCarbonEmissions() {
        return carbonEmissions;
    }

    public void setCarbonEmissions(double carbonEmissions) {
        this.carbonEmissions = carbonEmissions;
    }

    public int getCarbonAbsorption() {
        return carbonAbsorption;
    }

    public void setCarbonAbsorption(int carbonAbsorption) {
        this.carbonAbsorption = carbonAbsorption;
    }

    public int getElectricity() {
        return electricity;
    }

    public void setElectricity(int electricity) {
        this.electricity = electricity;
    }

    public double getGreenhouseGas() {
        return greenhouseGas;
    }

    public void setGreenhouseGas(double greenhouseGas) {
        this.greenhouseGas = greenhouseGas;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public CbicVO(String city, double carbonEmissions, int carbonAbsorption, int electricity, double greenhouseGas,
			String year, double total) {
		super();
		this.city = city;
		this.carbonEmissions = carbonEmissions;
		this.carbonAbsorption = carbonAbsorption;
		this.electricity = electricity;
		this.greenhouseGas = greenhouseGas;
		this.year = year;
		this.total = total;
	}

	@Override
	public String toString() {
		return "CbicVO [city=" + city + ", carbonEmissions=" + carbonEmissions + ", carbonAbsorption="
				+ carbonAbsorption + ", electricity=" + electricity + ", greenhouseGas=" + greenhouseGas + ", year="
				+ year + ", total=" + total + "]";
	}
}
