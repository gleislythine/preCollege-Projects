/**
 * Chyna Sarmiento
 * 04 November 2017
 * P1: AP Computer Science
 * 
 * Chapter 08 Exercise 04: Dice Roll Game
 * DRPlayer Object
 */

import java.util.Scanner;
import java.lang.Math;

public class DRPlayer{
	public int roll(int playerRisk, int PAR){
	
		Scanner input = new Scanner(System.in);
		System.out.print("Make a call: ");
		int highLow = input.nextInt();
		
		int die1 = (int)(6 * Math.random() + 1);
		int die2 = (int)(6 * Math.random() + 1);
		int dieTotal = die1 + die2;
		
		if(highLow == 0){
				   if(dieTotal == 7) { PAR -= playerRisk;
			} else if(dieTotal <= 6) { PAR += playerRisk * 2;
			} else if(dieTotal <= 12){ PAR -= playerRisk;
			}
		} else{
				   if(dieTotal == 7) { PAR -= playerRisk;
			} else if(dieTotal <= 6) { PAR -= playerRisk;
			} else if(dieTotal <= 12){ PAR += playerRisk * 2;
			}
		}
		
		System.out.println("You now have " + PAR + " points.\n");
		return PAR;
	}
}
