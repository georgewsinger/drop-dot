goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23187__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23187 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23188__i = 0, G__23188__a = new Array(arguments.length -  0);
while (G__23188__i < G__23188__a.length) {G__23188__a[G__23188__i] = arguments[G__23188__i + 0]; ++G__23188__i;}
  args = new cljs.core.IndexedSeq(G__23188__a,0);
} 
return G__23187__delegate.call(this,args);};
G__23187.cljs$lang$maxFixedArity = 0;
G__23187.cljs$lang$applyTo = (function (arglist__23189){
var args = cljs.core.seq(arglist__23189);
return G__23187__delegate(args);
});
G__23187.cljs$core$IFn$_invoke$arity$variadic = G__23187__delegate;
return G__23187;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23190__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23190 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23191__i = 0, G__23191__a = new Array(arguments.length -  0);
while (G__23191__i < G__23191__a.length) {G__23191__a[G__23191__i] = arguments[G__23191__i + 0]; ++G__23191__i;}
  args = new cljs.core.IndexedSeq(G__23191__a,0);
} 
return G__23190__delegate.call(this,args);};
G__23190.cljs$lang$maxFixedArity = 0;
G__23190.cljs$lang$applyTo = (function (arglist__23192){
var args = cljs.core.seq(arglist__23192);
return G__23190__delegate(args);
});
G__23190.cljs$core$IFn$_invoke$arity$variadic = G__23190__delegate;
return G__23190;
})()
;

return null;
});
