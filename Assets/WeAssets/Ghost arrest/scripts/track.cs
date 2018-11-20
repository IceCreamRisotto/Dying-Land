using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class track : MonoBehaviour {

	private Transform thing;
	public Transform purpose;
	public float speed;
	public Transform sprite;
	void Update(){
		Vector2 thingPos = gameObject.transform.position;
		Vector2 purposePos = purpose.position;
		Vector2 V = thingPos-purposePos;

		if (V.x <= 0.1f) {
			sprite.localScale= new Vector3 (-1,1,1);
		}
		if(V.x>=-0.1){
			sprite.localScale= new Vector3 (1,1,1);
		}

		if (V.magnitude >= 0.1f) {//V的返回向量長度
			//thingPos = Vector2.LerpUnclamped (thingPos, purposePos, speed*Time.deltaTime);//攝影機專用
			thingPos=Vector2.MoveTowards(thingPos,purposePos,speed*Time.deltaTime);//等速移動
			gameObject.transform.position = thingPos;
		}
	}
}
