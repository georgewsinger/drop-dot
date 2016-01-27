goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__297805__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__297805 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__297806__i = 0, G__297806__a = new Array(arguments.length -  0);
while (G__297806__i < G__297806__a.length) {G__297806__a[G__297806__i] = arguments[G__297806__i + 0]; ++G__297806__i;}
  args = new cljs.core.IndexedSeq(G__297806__a,0);
} 
return G__297805__delegate.call(this,args);};
G__297805.cljs$lang$maxFixedArity = 0;
G__297805.cljs$lang$applyTo = (function (arglist__297807){
var args = cljs.core.seq(arglist__297807);
return G__297805__delegate(args);
});
G__297805.cljs$core$IFn$_invoke$arity$variadic = G__297805__delegate;
return G__297805;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__297808__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__297808 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__297809__i = 0, G__297809__a = new Array(arguments.length -  0);
while (G__297809__i < G__297809__a.length) {G__297809__a[G__297809__i] = arguments[G__297809__i + 0]; ++G__297809__i;}
  args = new cljs.core.IndexedSeq(G__297809__a,0);
} 
return G__297808__delegate.call(this,args);};
G__297808.cljs$lang$maxFixedArity = 0;
G__297808.cljs$lang$applyTo = (function (arglist__297810){
var args = cljs.core.seq(arglist__297810);
return G__297808__delegate(args);
});
G__297808.cljs$core$IFn$_invoke$arity$variadic = G__297808__delegate;
return G__297808;
})()
;

return null;
});
