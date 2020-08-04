/**
 * Chyna Sarmiento
 * 8 October 2017
 * P1: AP Computer Science
 * 
 * Review: Time Converter
 * Create a TimeConverter application that allows the user to choose among converting
 * hours to minutes, days to hours, minutes to hours, or hours to days. Use methods as
 * appropriate.
 */

import java.util.Scanner;

public class r1_TimeConverter{
	public static void hoursToMinutes(){
		Scanner input = new Scanner(System.in);
			System.out.print("Enter an Hour to convert to Minutes: ");
			double hours = input.nextDouble();
		input.close();
		
		double minutes = hours * 60;
		System.out.println("The minute/s is " + minutes);
	}
	
	public static void daysToHours(){
		Scanner input = new Scanner(System.in);
			System.out.print("Enter a Day to convert to Hours: ");
			double days = input.nextDouble();
		input.close();
		
		double hours = days * 24;
		System.out.println("The hour/s is " + hours);
	}
	
	public static void minutesToHours(){
		Scanner input = new Scanner(System.in);
			System.out.print("Enter a Minute to convert to Hours: ");
			double minutes = input.nextDouble();
		input.close();
		
		double hours = minutes / 60;
		System.out.println("The Minute/s is " + hours);
	}
	
	public static void hoursToDays(){
		Scanner input = new Scanner(System.in);
			System.out.print("Enter an Hour to convert to Days: ");
			double hours = input.nextDouble();
		input.close();
		
		double days = hours / 24;
		System.out.println("The Day/s is " + days);
	}
	
    public static void main(String[] args){
    	Scanner input = new Scanner(System.in);
    		System.out.println("1. Hours to Minutes conversion.");
    		System.out.println("2. Days to Hours conversion");
    		System.out.println("3. Minutes to Hours conversion.");
    		System.out.println("4. Hours to Days conversion");
    		System.out.print("Enter your choice: ");
    		int uChoice = input.nextInt();
    		
    			  if(uChoice == 1){ hoursToMinutes();
   			}else if(uChoice == 2){ daysToHours();
    		}else if(uChoice == 3){ minutesToHours();
    		}else if(uChoice == 4){ hoursToDays();
    		}else{ System.out.println("Enter a valid choice.");
    		}
   		input.close();
    }
}
