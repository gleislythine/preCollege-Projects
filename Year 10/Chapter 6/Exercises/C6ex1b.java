/** 
 * PrimeNumber, Part b
 */

import java.util.ArrayList;
import java.util.Scanner;

public class C6ex1b {
 public static void main(String[] args) {
  Scanner input = new Scanner(System.in);
   System.out.print("Enter the smallest number of your range: ");
   int wholeNum1 = input.nextInt();

   System.out.print("Enter the biggest number of your range: ");
   int wholeNum2 = input.nextInt();
  input.close();
  
  ArrayList <Integer> primes = new ArrayList <Integer>();
  if (wholeNum1 == 1) {
  	wholeNum1 += 1;
  	
  	for(int i = wholeNum1; i < wholeNum2; i++){ boolean isPrime = true;
			for(int n = 2; n < i; n++){
				if(i % n == 0){
				isPrime = false; 
				break; }
			}
			if(isPrime){ primes.add(i); }
		}
  } else{
  	for(int i = wholeNum1; i < wholeNum2; i++){ boolean isPrime = true;
			for(int n = 2; n < i; n++){
				if(i % n == 0){ isPrime = false; 
				break; }
			}
			if(isPrime){ primes.add(i); }
	}
  }
  for (Integer s: primes) { System.out.println(s); }
 }
}