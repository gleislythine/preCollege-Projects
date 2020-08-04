/**
 *  RandomNum p111
 */

import java.util.Scanner;

public class RandomNum {
    public static void main(String [] args) {
    	Scanner input = new Scanner(System.in);
    	System.out.print("Enter the minimum number: ");
    	int min = input.nextInt();
    	
    	System.out.print("Enter the maximum number: ");
    	int max = input.nextInt();
    	input.close();
    	
    	double num = (max - min + 1) * Math.random() + min;
    	
    	System.out.println("Your random number is: " + (int)num);
    }
}