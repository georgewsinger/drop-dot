goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16683__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__16683 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16684__i = 0, G__16684__a = new Array(arguments.length -  0);
while (G__16684__i < G__16684__a.length) {G__16684__a[G__16684__i] = arguments[G__16684__i + 0]; ++G__16684__i;}
  args = new cljs.core.IndexedSeq(G__16684__a,0);
} 
return G__16683__delegate.call(this,args);};
G__16683.cljs$lang$maxFixedArity = 0;
G__16683.cljs$lang$applyTo = (function (arglist__16685){
var args = cljs.core.seq(arglist__16685);
return G__16683__delegate(args);
});
G__16683.cljs$core$IFn$_invoke$arity$variadic = G__16683__delegate;
return G__16683;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__16686__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__16686 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16687__i = 0, G__16687__a = new Array(arguments.length -  0);
while (G__16687__i < G__16687__a.length) {G__16687__a[G__16687__i] = arguments[G__16687__i + 0]; ++G__16687__i;}
  args = new cljs.core.IndexedSeq(G__16687__a,0);
} 
return G__16686__delegate.call(this,args);};
G__16686.cljs$lang$maxFixedArity = 0;
G__16686.cljs$lang$applyTo = (function (arglist__16688){
var args = cljs.core.seq(arglist__16688);
return G__16686__delegate(args);
});
G__16686.cljs$core$IFn$_invoke$arity$variadic = G__16686__delegate;
return G__16686;
})()
;

return null;
});
