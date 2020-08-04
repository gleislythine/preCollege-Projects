/**
 *  Eggs
 */

import java.util.Scanner;
import java.text.NumberFormat;

public class C5ex3 {
    public static void main(String [] Args) {
    	
    	NumberFormat money = NumberFormat.getCurrencyInstance();
    	int eggs, eggsByDozen, remainingEg;
    	double eggFixedPrice, eggTotal;
    	
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter the number of eggs purchased: ");
    		eggs  = input.nextInt();
    	input.close();
    	
    	eggsByDozen = eggs / 12;
    	remainingEg = eggs % 12;
    	
    	       if (eggsByDozen <  3){ eggFixedPrice = .50;
    	} else if (eggsByDozen <  5){ eggFixedPrice = .45;
    	} else if (eggsByDozen < 10){ eggFixedPrice = .40;
    	} else                      { eggFixedPrice = .35; }
    	
    	if(remainingEg > 0){
    		eggTotal = ((eggFixedPrice / 12) * remainingEg) + (eggFixedPrice * eggsByDozen);
    	} else{
    		eggTotal = eggFixedPrice * eggsByDozen;
    	}
    	
    	System.out.println("The bill is equal to: " + money.format(eggTotal));
    }
}