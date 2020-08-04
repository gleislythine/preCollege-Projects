/**
 * Chyna Sarmiento
 * 08 November 2017
 * P1: AP Computer Science
 * 
 * Chapter 08 Exercise 05: Nim 2
 * Player Object
 */

import java.util.Scanner;
import java.lang.Math;
import java.util.Random;

public class nimPlayer{
	public boolean userValid(int usertake, int stones) {
		boolean uNumValid;
		if(usertake > 3 || usertake <1) { uNumValid = false;
		} else if   (usertake > stones) { uNumValid = false;
		} else {						  uNumValid = true;
		}
		
		return(uNumValid);
	}
	
	public boolean compValid(int comptake, int stones) {
		boolean cNumValid;
		
		if (comptake > 3 || comptake <1) { cNumValid = false;	
		} else if    (comptake > stones) { cNumValid = false;
		} else { 						   cNumValid = true;
		}
		
		return(cNumValid);
	}
	
	public int userTurn(int stones) {
		Scanner in = new Scanner(System.in);
			System.out.print("There are " + stones + " stones. How many would you like to take? ");
			int userPick = in.nextInt();
			
		boolean check = userValid(userPick, stones);
		
		if (check) { return(userPick);
		} else {
			System.out.print("Wrong input. Please enter a valid number.\n");
			return userTurn(stones);
		}
	}
	
	public int compTurn(int stones) {
		int compPick = (int)(3 * Math.random() + 1);
		boolean check = compValid(compPick, stones);
		
		if(check) { return(compPick);
		} else {    return compTurn(stones);
		}
	}
	/**
	
	public boolean isValidEntry(int stoneCount, int userNum){	   
	}
	
	public void result(){
	}**/
}
