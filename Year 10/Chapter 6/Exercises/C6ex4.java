/**
 *  CarRecall
 */

import java.util.Scanner;

public class C6ex4 {
    public static void main(String[] args) {
    	final int SENTINEL = 0;
    	int modelNum;
    	
    	Scanner input = new Scanner(System.in);	
    		do{
    			System.out.print("Enter car's model number or 0 to quit: ");
    			modelNum = input.nextInt();
    			
    			int[] carDef = {
    				119, 179, 189,
    				190, 191, 192,
    				193, 194, 195,
    				221, 780
    			};
    			
    			boolean match = false;
    			
    			for(int i = 0; i < carDef.length; i++){
    				if(modelNum == carDef[i]){ match = true; }
    			}
    			
    			       if (match){        System.out.println("Your car is defective. It must be repaired.");
    			} else if(modelNum != 0){ System.out.println("Your car is not defective."); }		
    		}while(modelNum != SENTINEL);
		input.close();
    }
}