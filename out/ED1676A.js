goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__291643__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__291643 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__291644__i = 0, G__291644__a = new Array(arguments.length -  0);
while (G__291644__i < G__291644__a.length) {G__291644__a[G__291644__i] = arguments[G__291644__i + 0]; ++G__291644__i;}
  args = new cljs.core.IndexedSeq(G__291644__a,0);
} 
return G__291643__delegate.call(this,args);};
G__291643.cljs$lang$maxFixedArity = 0;
G__291643.cljs$lang$applyTo = (function (arglist__291645){
var args = cljs.core.seq(arglist__291645);
return G__291643__delegate(args);
});
G__291643.cljs$core$IFn$_invoke$arity$variadic = G__291643__delegate;
return G__291643;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__291646__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__291646 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__291647__i = 0, G__291647__a = new Array(arguments.length -  0);
while (G__291647__i < G__291647__a.length) {G__291647__a[G__291647__i] = arguments[G__291647__i + 0]; ++G__291647__i;}
  args = new cljs.core.IndexedSeq(G__291647__a,0);
} 
return G__291646__delegate.call(this,args);};
G__291646.cljs$lang$maxFixedArity = 0;
G__291646.cljs$lang$applyTo = (function (arglist__291648){
var args = cljs.core.seq(arglist__291648);
return G__291646__delegate(args);
});
G__291646.cljs$core$IFn$_invoke$arity$variadic = G__291646__delegate;
return G__291646;
})()
;

return null;
});
