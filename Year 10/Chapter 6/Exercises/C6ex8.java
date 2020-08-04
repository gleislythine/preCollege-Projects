/**
 * GuessingGame, Part B and C
 */

import java.util.Scanner;
import java.util.Random;

/**
 *
 *  GussingGame Flowchart
 *                          * *
 *                       * Start *
 *                          * *
 *                           |
 *                           V
 *         ---------------------------------------
 *         | Generate random number bewween 1-20 |
 *         ---------------------------------------
 *                           |
 *                           V
 *                --------------------------
 *                | Get number from player |
 *                --------------------------
 *                           |
 *                           V
 *                           /\
 *         ---------Did the player win? ---------------
 *         |                 \/                       |
 *         |                 |                        |
 *         |                 V                        |
 *        YES         ---------------------          NO
 *         |        /Show computer number/            |
 *         |       ----------------------             |
 *         |                 |                        |
 *         V                 V                        V
 *    -----------      ----------------- --------------------------
 *    |"You win"|    /Show user number/  |"Better Luck Next Time!"|
 *    -----------   -----------------    --------------------------
 *         |                * *                       |
 *         |------------> * End * <-------------------|
 *                          * *
 */

public class C6ex8 {
    public static void main(String [] Args) {
    	Random r = new Random();
    	int compNum = (int)(20 * Math.random() + 1);
    	int userNum;
    	final int SENTINEL = 0;
    	
    	Scanner input = new Scanner(System.in);
    		do{
    			System.out.print("Enter a number between 1 and 20: ");
    			userNum = input.nextInt();
    	
    	       		   if(compNum == userNum){ System.out.println("You won!");
    			} else if(userNum != 0){ System.out.println("Try again."); }
    		} while(userNum != SENTINEL);
    	input.close();    		
    }
}