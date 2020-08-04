/**
 * Chyna Sarmiento
 * 16 October 2017
 * P1: AP Computer Science
 * 
 * Chapter 07 Exercise 09: Nim
 */

import java.util.Scanner;
import java.lang.Math;

public class c07e09_Nim{
	public static int compTurn(int stones){
		int compPick = (int)(3 * Math.random() + 1);
		return(compPick);
	}
	
	public static int userTurn(int stones){
		Scanner input = new Scanner(System.in);
			System.out.print("How many would you like? ");
			int userPick = input.nextInt();
		
		return(userPick);
	}
	
	public static boolean isValidEntry(int stoneCount, int userNum){
			   if((stoneCount < 3) && (userNum >= 3)){ return(false);
		} else if(userNum == 1){ 				   	   return(true);
		} else if(userNum == 2){ 		   		   	   return(true);
		} else if(userNum == 3){ 		   		   	   return(true);
		} else{ 								   	   return(false);
		}
	}
	
    public static void main(String[] args){
    	int ranStones = (int)(16 * Math.random() + 15);
    	
    	while(0 < ranStones){
    	}
    }
}