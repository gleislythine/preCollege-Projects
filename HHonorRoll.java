/**
 *  HHonorRoll
 */

import java.util.Scanner;

public class HHonorRoll {
    public static void main(String [] args) {
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter the grade here: ");
    		int g = input.nextInt();
    	input.close();
    	
    	       if(g >= 90 && g <= 100){
    		System.out.println("You get a High Honor Roll.");
    	} else if(g < 90 && g >= 85){
    		System.out.println("You get an Honor Roll.");
    	} else if(g < 85){
    		System.out.println("You get no Honor Roll.");
    	} else {
    		System.out.println("You have not entered the correct range of grade.");
    	}
    }
}