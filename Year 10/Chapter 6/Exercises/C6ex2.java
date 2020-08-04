/**
 * PrimeFactors
 */

import java.util.Scanner;

public class C6ex2 {
    public static void main(String[] args) {
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter a positive whole integer number: ");
    		int posInt = input.nextInt();
    	input.close();
    	
    	int counter = 2;
    	boolean evenNum = false;
    	
    	while(counter <= posInt){
    		if(posInt % counter == 0){
    			posInt = posInt / counter;
    			System.out.println(counter);
    		} else{ counter++; }
    	}
    }
}