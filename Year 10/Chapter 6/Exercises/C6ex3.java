/**
 * Investment
 */

public class C6ex3 {
    public static void main(String[] args) {
    	int years     = 0;
    	int initial   = 2500;
    	int targetInv = 5000;
    	double rate   = initial * 0.075;
    	
    	while(initial < targetInv){
    		initial += rate;
    		years   += 1;
    	}
    	System.out.println(years);
    }
}