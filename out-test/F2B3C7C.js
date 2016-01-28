goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__92938__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__92938 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__92939__i = 0, G__92939__a = new Array(arguments.length -  0);
while (G__92939__i < G__92939__a.length) {G__92939__a[G__92939__i] = arguments[G__92939__i + 0]; ++G__92939__i;}
  args = new cljs.core.IndexedSeq(G__92939__a,0);
} 
return G__92938__delegate.call(this,args);};
G__92938.cljs$lang$maxFixedArity = 0;
G__92938.cljs$lang$applyTo = (function (arglist__92940){
var args = cljs.core.seq(arglist__92940);
return G__92938__delegate(args);
});
G__92938.cljs$core$IFn$_invoke$arity$variadic = G__92938__delegate;
return G__92938;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__92941__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__92941 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__92942__i = 0, G__92942__a = new Array(arguments.length -  0);
while (G__92942__i < G__92942__a.length) {G__92942__a[G__92942__i] = arguments[G__92942__i + 0]; ++G__92942__i;}
  args = new cljs.core.IndexedSeq(G__92942__a,0);
} 
return G__92941__delegate.call(this,args);};
G__92941.cljs$lang$maxFixedArity = 0;
G__92941.cljs$lang$applyTo = (function (arglist__92943){
var args = cljs.core.seq(arglist__92943);
return G__92941__delegate(args);
});
G__92941.cljs$core$IFn$_invoke$arity$variadic = G__92941__delegate;
return G__92941;
})()
;

return null;
});
