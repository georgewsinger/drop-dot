goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__78143__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__78143 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78144__i = 0, G__78144__a = new Array(arguments.length -  0);
while (G__78144__i < G__78144__a.length) {G__78144__a[G__78144__i] = arguments[G__78144__i + 0]; ++G__78144__i;}
  args = new cljs.core.IndexedSeq(G__78144__a,0);
} 
return G__78143__delegate.call(this,args);};
G__78143.cljs$lang$maxFixedArity = 0;
G__78143.cljs$lang$applyTo = (function (arglist__78145){
var args = cljs.core.seq(arglist__78145);
return G__78143__delegate(args);
});
G__78143.cljs$core$IFn$_invoke$arity$variadic = G__78143__delegate;
return G__78143;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__78146__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__78146 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__78147__i = 0, G__78147__a = new Array(arguments.length -  0);
while (G__78147__i < G__78147__a.length) {G__78147__a[G__78147__i] = arguments[G__78147__i + 0]; ++G__78147__i;}
  args = new cljs.core.IndexedSeq(G__78147__a,0);
} 
return G__78146__delegate.call(this,args);};
G__78146.cljs$lang$maxFixedArity = 0;
G__78146.cljs$lang$applyTo = (function (arglist__78148){
var args = cljs.core.seq(arglist__78148);
return G__78146__delegate(args);
});
G__78146.cljs$core$IFn$_invoke$arity$variadic = G__78146__delegate;
return G__78146;
})()
;

return null;
});
