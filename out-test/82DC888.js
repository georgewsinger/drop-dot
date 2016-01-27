goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__73213__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__73213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73214__i = 0, G__73214__a = new Array(arguments.length -  0);
while (G__73214__i < G__73214__a.length) {G__73214__a[G__73214__i] = arguments[G__73214__i + 0]; ++G__73214__i;}
  args = new cljs.core.IndexedSeq(G__73214__a,0);
} 
return G__73213__delegate.call(this,args);};
G__73213.cljs$lang$maxFixedArity = 0;
G__73213.cljs$lang$applyTo = (function (arglist__73215){
var args = cljs.core.seq(arglist__73215);
return G__73213__delegate(args);
});
G__73213.cljs$core$IFn$_invoke$arity$variadic = G__73213__delegate;
return G__73213;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__73216__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__73216 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73217__i = 0, G__73217__a = new Array(arguments.length -  0);
while (G__73217__i < G__73217__a.length) {G__73217__a[G__73217__i] = arguments[G__73217__i + 0]; ++G__73217__i;}
  args = new cljs.core.IndexedSeq(G__73217__a,0);
} 
return G__73216__delegate.call(this,args);};
G__73216.cljs$lang$maxFixedArity = 0;
G__73216.cljs$lang$applyTo = (function (arglist__73218){
var args = cljs.core.seq(arglist__73218);
return G__73216__delegate(args);
});
G__73216.cljs$core$IFn$_invoke$arity$variadic = G__73216__delegate;
return G__73216;
})()
;

return null;
});
