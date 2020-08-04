/**
 * DigitsSum
 */

import java.util.Scanner;

public class C6ex6 {
    public static void main(String[] args) {
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter a positive integer: ");
    		String posInt = input.nextLine();
    	input.close();
    	
    	int y = 0;
    	for(int i = 0; i < posInt.length(); i++){ y += Integer.parseInt(posInt.substring(i, i + 1));
    	}
    	System.out.println("The sum of the digits is: " + y);
    }
}