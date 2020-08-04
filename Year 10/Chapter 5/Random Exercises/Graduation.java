/**
 * Graduation
 */

import java.util.Scanner;

public class Graduation {
    public static void main(String [] args) {
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter the Grade Point Average here: ");
    		double gpa = input.nextDouble();
    	input.close();
    	
    	String distinction;
    	  if(gpa <= 3.4 || gpa > 4){ 
    	    System.out.print("Sorry, you are not qualified for any distinctions.");
    	} else{
    		       if(gpa <= 3.64){ distinction = "Cum Laude";
    		} else if(gpa <= 3.7 ){ distinction = "Magna Cum Laude";
    		} else{                 distinction = "Summa Cum Laude";
    		}
    	System.out.print("Congratulations! You are qualified for " + distinction + "!");
    	}
    }
}