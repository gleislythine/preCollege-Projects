/**
 * Chyna Sarmiento
 * 31 October 2017
 * P1: AP Computer Science
 * 
 * Chapter 08 Exercise 02: Digit Extractor
 * Num Class Object
 */

public class Num{
	
	public void theNumber(int intNum, String userPlace){
    	int whole 	 = intNum;
    	int ones 	 = intNum % 10;
    	int tens  	 = (intNum / 10) % 10;
    	int hundreds = (intNum / 100) % 10;
    	
    		   if(userPlace.equalsIgnoreCase("W")){ System.out.println("The whole digit is: " + whole + "\n");
    	} else if(userPlace.equalsIgnoreCase("O")){ System.out.println("The ones place digit is: " + ones + "\n");
    	} else if(userPlace.equalsIgnoreCase("T")){ System.out.println("The tens place digit is: " + tens + "\n");
    	} else if(userPlace.equalsIgnoreCase("H")){ System.out.println("The hundreds place digit is: " + hundreds + "\n");
    	}
    }
}
