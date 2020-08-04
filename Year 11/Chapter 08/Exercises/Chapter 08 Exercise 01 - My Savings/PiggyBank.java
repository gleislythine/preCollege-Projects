/**
 * Chyna Sarmiento
 * 25 October 2017
 * P1: AP Computer Science
 * 
 * Chapter 08 Exercise 01: My Savings
 * Piggy Bank Class Object
 */

import java.util.Scanner;
import java.text.NumberFormat;

public class PiggyBank{
	double total = 0.00;
	
	public void moneyDo(int userInput){
		NumberFormat money = NumberFormat.getCurrencyInstance();
		double ui;
		
		Scanner input = new Scanner(System.in);
			   if(userInput == 1){ System.out.println("New Total: " + money.format(total) + "\n");
		} else if(userInput == 2){ System.out.print("How many pennies do you want to add? ");
									ui = input.nextDouble();
									ui *= 0.01;
									total += ui;
									System.out.println("New Total: " + money.format(total) + "\n");
		} else if(userInput == 3){ System.out.print("How many nickels do you want to add? ");
									ui = input.nextDouble();
									ui *= 0.05;
									total += ui;
									System.out.println("New Total: " + money.format(total) + "\n");
		} else if(userInput == 4){ System.out.print("How many dimes do you want to add? ");
									ui = input.nextDouble();
									ui *= 0.10;
									total += ui;
									System.out.println("New Total: " + money.format(total) + "\n");
		} else if(userInput == 5){ System.out.print("How many quarters do you want to add? ");
									ui = input.nextDouble();
									ui *= 0.25;
									total += ui;
									System.out.println("New Total: " + money.format(total) + "\n");
		} else if(userInput == 6){ System.out.print("How much do you want to withdraw? ");
								   double wdAmount = input.nextDouble();
								   total -= wdAmount;
								   System.out.println("New Total: " + money.format(total) + "\n");
		}
	}
}
