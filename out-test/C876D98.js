goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__58315__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__58315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58316__i = 0, G__58316__a = new Array(arguments.length -  0);
while (G__58316__i < G__58316__a.length) {G__58316__a[G__58316__i] = arguments[G__58316__i + 0]; ++G__58316__i;}
  args = new cljs.core.IndexedSeq(G__58316__a,0);
} 
return G__58315__delegate.call(this,args);};
G__58315.cljs$lang$maxFixedArity = 0;
G__58315.cljs$lang$applyTo = (function (arglist__58317){
var args = cljs.core.seq(arglist__58317);
return G__58315__delegate(args);
});
G__58315.cljs$core$IFn$_invoke$arity$variadic = G__58315__delegate;
return G__58315;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__58318__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__58318 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58319__i = 0, G__58319__a = new Array(arguments.length -  0);
while (G__58319__i < G__58319__a.length) {G__58319__a[G__58319__i] = arguments[G__58319__i + 0]; ++G__58319__i;}
  args = new cljs.core.IndexedSeq(G__58319__a,0);
} 
return G__58318__delegate.call(this,args);};
G__58318.cljs$lang$maxFixedArity = 0;
G__58318.cljs$lang$applyTo = (function (arglist__58320){
var args = cljs.core.seq(arglist__58320);
return G__58318__delegate(args);
});
G__58318.cljs$core$IFn$_invoke$arity$variadic = G__58318__delegate;
return G__58318;
})()
;

return null;
});
