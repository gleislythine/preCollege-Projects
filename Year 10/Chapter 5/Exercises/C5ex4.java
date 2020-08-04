/**
 *  CarRecall
 */

import java.util.Scanner;

public class C5ex4 {
    public static void main(String [] Args) {
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter the car's model number: ");
    		int modelNum = input.nextInt();
    	input.close();
    	
    	int[] carDef = {
    		119, 179, 189,
    		190, 191, 192,
    		193, 194, 195,
    		221, 780
    	};
    	
    	boolean match = false;
    	
    	for(int i = 0; i < carDef.length; i++){
    		if(modelNum == carDef[i]){
    		match = true;
    		}
    	}
    	
    	if (match){
    		System.out.println("Your car is defective. It must be repaired.");
    	} else{
    		System.out.println("Your car is not defective.");
    	}
    }
}