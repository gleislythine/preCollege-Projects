/**
 * PrimeNumber, Part A
 */

import java.util.Scanner;

public class C6ex1a {
	public static boolean isPrime(int n) {
		for(int i = 2; i <= n / 2; i++){
			if(n % i == 0){ return false; }
		} return true;
    }

    public static void main(String[] args) {
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter a whole number: ");
    		int wholeNum1 = input.nextInt();
    	input.close();
    	
    	if(isPrime(wholeNum1)){
    		System.out.println("The number you entered is a prime number.");
    	} else{    
    		System.out.println("The number you entered is not a prime number.");
    	}
    }
}
