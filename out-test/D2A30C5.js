goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__59694__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__59694 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59695__i = 0, G__59695__a = new Array(arguments.length -  0);
while (G__59695__i < G__59695__a.length) {G__59695__a[G__59695__i] = arguments[G__59695__i + 0]; ++G__59695__i;}
  args = new cljs.core.IndexedSeq(G__59695__a,0);
} 
return G__59694__delegate.call(this,args);};
G__59694.cljs$lang$maxFixedArity = 0;
G__59694.cljs$lang$applyTo = (function (arglist__59696){
var args = cljs.core.seq(arglist__59696);
return G__59694__delegate(args);
});
G__59694.cljs$core$IFn$_invoke$arity$variadic = G__59694__delegate;
return G__59694;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__59697__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__59697 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__59698__i = 0, G__59698__a = new Array(arguments.length -  0);
while (G__59698__i < G__59698__a.length) {G__59698__a[G__59698__i] = arguments[G__59698__i + 0]; ++G__59698__i;}
  args = new cljs.core.IndexedSeq(G__59698__a,0);
} 
return G__59697__delegate.call(this,args);};
G__59697.cljs$lang$maxFixedArity = 0;
G__59697.cljs$lang$applyTo = (function (arglist__59699){
var args = cljs.core.seq(arglist__59699);
return G__59697__delegate(args);
});
G__59697.cljs$core$IFn$_invoke$arity$variadic = G__59697__delegate;
return G__59697;
})()
;

return null;
});
