goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__56862__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__56862 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56863__i = 0, G__56863__a = new Array(arguments.length -  0);
while (G__56863__i < G__56863__a.length) {G__56863__a[G__56863__i] = arguments[G__56863__i + 0]; ++G__56863__i;}
  args = new cljs.core.IndexedSeq(G__56863__a,0);
} 
return G__56862__delegate.call(this,args);};
G__56862.cljs$lang$maxFixedArity = 0;
G__56862.cljs$lang$applyTo = (function (arglist__56864){
var args = cljs.core.seq(arglist__56864);
return G__56862__delegate(args);
});
G__56862.cljs$core$IFn$_invoke$arity$variadic = G__56862__delegate;
return G__56862;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__56865__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__56865 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56866__i = 0, G__56866__a = new Array(arguments.length -  0);
while (G__56866__i < G__56866__a.length) {G__56866__a[G__56866__i] = arguments[G__56866__i + 0]; ++G__56866__i;}
  args = new cljs.core.IndexedSeq(G__56866__a,0);
} 
return G__56865__delegate.call(this,args);};
G__56865.cljs$lang$maxFixedArity = 0;
G__56865.cljs$lang$applyTo = (function (arglist__56867){
var args = cljs.core.seq(arglist__56867);
return G__56865__delegate(args);
});
G__56865.cljs$core$IFn$_invoke$arity$variadic = G__56865__delegate;
return G__56865;
})()
;

return null;
});
