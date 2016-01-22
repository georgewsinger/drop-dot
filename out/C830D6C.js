goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__18096__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__18096 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18097__i = 0, G__18097__a = new Array(arguments.length -  0);
while (G__18097__i < G__18097__a.length) {G__18097__a[G__18097__i] = arguments[G__18097__i + 0]; ++G__18097__i;}
  args = new cljs.core.IndexedSeq(G__18097__a,0);
} 
return G__18096__delegate.call(this,args);};
G__18096.cljs$lang$maxFixedArity = 0;
G__18096.cljs$lang$applyTo = (function (arglist__18098){
var args = cljs.core.seq(arglist__18098);
return G__18096__delegate(args);
});
G__18096.cljs$core$IFn$_invoke$arity$variadic = G__18096__delegate;
return G__18096;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__18099__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__18099 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18100__i = 0, G__18100__a = new Array(arguments.length -  0);
while (G__18100__i < G__18100__a.length) {G__18100__a[G__18100__i] = arguments[G__18100__i + 0]; ++G__18100__i;}
  args = new cljs.core.IndexedSeq(G__18100__a,0);
} 
return G__18099__delegate.call(this,args);};
G__18099.cljs$lang$maxFixedArity = 0;
G__18099.cljs$lang$applyTo = (function (arglist__18101){
var args = cljs.core.seq(arglist__18101);
return G__18099__delegate(args);
});
G__18099.cljs$core$IFn$_invoke$arity$variadic = G__18099__delegate;
return G__18099;
})()
;

return null;
});
