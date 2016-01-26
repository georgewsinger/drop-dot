goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24225__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24225 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24226__i = 0, G__24226__a = new Array(arguments.length -  0);
while (G__24226__i < G__24226__a.length) {G__24226__a[G__24226__i] = arguments[G__24226__i + 0]; ++G__24226__i;}
  args = new cljs.core.IndexedSeq(G__24226__a,0);
} 
return G__24225__delegate.call(this,args);};
G__24225.cljs$lang$maxFixedArity = 0;
G__24225.cljs$lang$applyTo = (function (arglist__24227){
var args = cljs.core.seq(arglist__24227);
return G__24225__delegate(args);
});
G__24225.cljs$core$IFn$_invoke$arity$variadic = G__24225__delegate;
return G__24225;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24228__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24228 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24229__i = 0, G__24229__a = new Array(arguments.length -  0);
while (G__24229__i < G__24229__a.length) {G__24229__a[G__24229__i] = arguments[G__24229__i + 0]; ++G__24229__i;}
  args = new cljs.core.IndexedSeq(G__24229__a,0);
} 
return G__24228__delegate.call(this,args);};
G__24228.cljs$lang$maxFixedArity = 0;
G__24228.cljs$lang$applyTo = (function (arglist__24230){
var args = cljs.core.seq(arglist__24230);
return G__24228__delegate(args);
});
G__24228.cljs$core$IFn$_invoke$arity$variadic = G__24228__delegate;
return G__24228;
})()
;

return null;
});
