/**
 *  DigitsDisplay
 */

import java.util.Scanner;

public class C6ex5 {
	public static void main(String[] args) {
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter a positive integer: ");
    		String posInt = input.nextLine();
    	input.close();
    	
    	for(int i = 0; i < posInt.length(); i++){ System.out.println(posInt.substring(i, i + 1));
    	}
    }
}