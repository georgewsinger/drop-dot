goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__284172__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__284172 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__284173__i = 0, G__284173__a = new Array(arguments.length -  0);
while (G__284173__i < G__284173__a.length) {G__284173__a[G__284173__i] = arguments[G__284173__i + 0]; ++G__284173__i;}
  args = new cljs.core.IndexedSeq(G__284173__a,0);
} 
return G__284172__delegate.call(this,args);};
G__284172.cljs$lang$maxFixedArity = 0;
G__284172.cljs$lang$applyTo = (function (arglist__284174){
var args = cljs.core.seq(arglist__284174);
return G__284172__delegate(args);
});
G__284172.cljs$core$IFn$_invoke$arity$variadic = G__284172__delegate;
return G__284172;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__284175__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__284175 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__284176__i = 0, G__284176__a = new Array(arguments.length -  0);
while (G__284176__i < G__284176__a.length) {G__284176__a[G__284176__i] = arguments[G__284176__i + 0]; ++G__284176__i;}
  args = new cljs.core.IndexedSeq(G__284176__a,0);
} 
return G__284175__delegate.call(this,args);};
G__284175.cljs$lang$maxFixedArity = 0;
G__284175.cljs$lang$applyTo = (function (arglist__284177){
var args = cljs.core.seq(arglist__284177);
return G__284175__delegate(args);
});
G__284175.cljs$core$IFn$_invoke$arity$variadic = G__284175__delegate;
return G__284175;
})()
;

return null;
});
