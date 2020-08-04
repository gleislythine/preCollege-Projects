/**
 *  Volumes
 */

import java.util.Scanner;
import java.text.NumberFormat;

public class C5ex10 {
    public static void main(String [] Args) {
    	NumberFormat decimal = NumberFormat.getNumberInstance();
    	
    	Scanner input = new Scanner(System.in);
    		System.out.println("Rectangular Prism");
    		
    			System.out.print("Enter the length: ");
    			int l = input.nextInt();
    		
    			System.out.print("Enter the width: ");
    			int w = input.nextInt();
    		
    			System.out.print("Enter the height: ");
    			int h = input.nextInt();
    			
    		int rVolume = l * w * h;
    		System.out.println("The volume is: " + rVolume + "\n");
    		
    		
    		System.out.println("Sphere");
    		
    			System.out.print("Enter the radius: ");
    			int r = input.nextInt();
    			
    		int d = r * 2;
    		double sVolume = ( Math.PI * Math.pow(d, 3) ) / 6;
    		System.out.println("The volume is: " + decimal.format(sVolume) + "\n");
    		
    		
    		System.out.println("Cube");
    		
    			System.out.print("Enter the length of each side: ");
    			double s = input.nextInt();
    			
    		double cVolume = Math.pow(s, 3);
    		System.out.println("The volume is: " + (int)cVolume);
    	input.close();
    }
}