/**
 * Monogram
 */

import java.util.*;

public class C6ex18{
	public static void main(String[] args){
    	String first, middle, last;
    	
    	ArrayList<String> names = new ArrayList<String>();
    		Scanner input = new Scanner(System.in);
    			System.out.print("Enter your first name: ");
    			first  = input.nextLine();
    			names.add(first);
    		
	    		System.out.print("Enter your middle initial: ");
    			middle = input.nextLine();
    			names.add(middle);
    		
	    		System.out.print("Enter your last name: ");
    			last   = input.nextLine();
    			names.add(last);
	    	input.close();
    	Collections.swap(names, 1, 2);
    	
    	for(int i = 0; i < names.size(); i++){
    	   String initials = names.get(i).substring(0,1);
    	   if(i == 1){ System.out.print(initials.toUpperCase());
    	   }else{      System.out.print(initials.toLowerCase()); }
    	}
    }
}