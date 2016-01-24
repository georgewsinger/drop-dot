goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31448__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__31448 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31449__i = 0, G__31449__a = new Array(arguments.length -  0);
while (G__31449__i < G__31449__a.length) {G__31449__a[G__31449__i] = arguments[G__31449__i + 0]; ++G__31449__i;}
  args = new cljs.core.IndexedSeq(G__31449__a,0);
} 
return G__31448__delegate.call(this,args);};
G__31448.cljs$lang$maxFixedArity = 0;
G__31448.cljs$lang$applyTo = (function (arglist__31450){
var args = cljs.core.seq(arglist__31450);
return G__31448__delegate(args);
});
G__31448.cljs$core$IFn$_invoke$arity$variadic = G__31448__delegate;
return G__31448;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__31451__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__31451 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31452__i = 0, G__31452__a = new Array(arguments.length -  0);
while (G__31452__i < G__31452__a.length) {G__31452__a[G__31452__i] = arguments[G__31452__i + 0]; ++G__31452__i;}
  args = new cljs.core.IndexedSeq(G__31452__a,0);
} 
return G__31451__delegate.call(this,args);};
G__31451.cljs$lang$maxFixedArity = 0;
G__31451.cljs$lang$applyTo = (function (arglist__31453){
var args = cljs.core.seq(arglist__31453);
return G__31451__delegate(args);
});
G__31451.cljs$core$IFn$_invoke$arity$variadic = G__31451__delegate;
return G__31451;
})()
;

return null;
});
