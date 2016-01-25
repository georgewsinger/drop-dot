goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23858__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23858 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23859__i = 0, G__23859__a = new Array(arguments.length -  0);
while (G__23859__i < G__23859__a.length) {G__23859__a[G__23859__i] = arguments[G__23859__i + 0]; ++G__23859__i;}
  args = new cljs.core.IndexedSeq(G__23859__a,0);
} 
return G__23858__delegate.call(this,args);};
G__23858.cljs$lang$maxFixedArity = 0;
G__23858.cljs$lang$applyTo = (function (arglist__23860){
var args = cljs.core.seq(arglist__23860);
return G__23858__delegate(args);
});
G__23858.cljs$core$IFn$_invoke$arity$variadic = G__23858__delegate;
return G__23858;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23861__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23861 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23862__i = 0, G__23862__a = new Array(arguments.length -  0);
while (G__23862__i < G__23862__a.length) {G__23862__a[G__23862__i] = arguments[G__23862__i + 0]; ++G__23862__i;}
  args = new cljs.core.IndexedSeq(G__23862__a,0);
} 
return G__23861__delegate.call(this,args);};
G__23861.cljs$lang$maxFixedArity = 0;
G__23861.cljs$lang$applyTo = (function (arglist__23863){
var args = cljs.core.seq(arglist__23863);
return G__23861__delegate(args);
});
G__23861.cljs$core$IFn$_invoke$arity$variadic = G__23861__delegate;
return G__23861;
})()
;

return null;
});
