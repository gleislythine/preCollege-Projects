/**
 * GuessingGame
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

public class C5ex9 {
    public static void main(String [] Args) {
    	Random r = new Random();
    	int compNum = (int)(20 * Math.random() + 1);
    	
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter a number between 1 and 20: ");
    		int userNum = input.nextInt();
    	input.close();
    	
    	System.out.println("Computer's Number: " + compNum);
    	System.out.println("Player's Number: "   + userNum);
    	
    	       if (userNum > 20 || userNum <= 0){
    	    System.out.println("ENTER A NUMBER BETWEEN 1 AND 20.");
    	} else if (compNum == userNum){
    		System.out.println("You won!");
    	} else{
    		System.out.println("Better luck next time.");
    	}
    }
}